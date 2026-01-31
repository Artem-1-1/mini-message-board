import pool from '../db/db.js';

function formatDate(dateString) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  
  const date = new Date(dateString);
  return date.toLocaleString('en-GB', options);
}

export async function getHomepage(req, res) {
  try {
    const result = await pool.query('SELECT * FROM user_messages ORDER BY created_at DESC');
    const messages = result.rows;
    
    const formattedMessages = messages.map(msg => ({
      ...msg,
      formatted_date: formatDate(msg.created_at)
    }));
    
    res.render('index', { messages: formattedMessages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).send('Error loading messages');
  }
};

export function getNewMessageForm(req, res) {
  res.render('form');
}


export async function  postNewMessage(req, res){
  try {
    const { username, message } = req.body;
    
    await pool.query(
      'INSERT INTO user_messages (username, message) VALUES ($1, $2)',
      [username, message]
    );
    
    res.redirect('/');
  } catch (error) {
    console.error('Error inserting message:', error);
    res.status(500).send('Error creating message');
  }
};