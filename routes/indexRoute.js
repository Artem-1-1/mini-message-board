import { Router } from 'express';

const router = Router();

import {
  getHomepage,
  getNewMessageForm,
  postNewMessage,
  getMessageInfo
} from '../controllers/indexController.js'

router.get('/', getHomepage);
router.get('/new', getNewMessageForm);
router.post('/new', postNewMessage);
router.get('/:messageID', getMessageInfo);

export default router;