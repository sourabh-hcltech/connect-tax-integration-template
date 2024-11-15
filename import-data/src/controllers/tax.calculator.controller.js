import { logger } from '../utils/logger.utils.js';
import {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_SERVER_ERROR,
  HTTP_STATUS_SUCCESS_ACCEPTED,
} from '../constants/http.status.constants.js';
import CustomError from '../errors/custom.error.js';

export const taxHandler = async (request, response) => {

  return response.status(HTTP_STATUS_SUCCESS_ACCEPTED).send(100000000000000);
};
