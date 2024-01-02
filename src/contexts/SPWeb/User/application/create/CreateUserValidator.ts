import { body } from 'express-validator';

export const CreateUserValidator = [
  body('firstname')
    .exists()
    .withMessage('First name is required')
    .trim()
    .isString()
    .withMessage('First name must be a string')
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters'),

  body('lastname')
    .exists()
    .withMessage('Last name is required')
    .trim()
    .isString()
    .withMessage('Last name must be a string')
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters'),

  body('phone')
    .exists()
    .withMessage('Phone number is required')
    .isNumeric()
    .withMessage('Phone number must be numeric')
    .isMobilePhone('es-MX')
    .withMessage('Phone number must be valid'),

  body('email')
    .exists()
    .withMessage('Email is required')
    .isString()
    .withMessage('Email must be a string')
    .isEmail()
    .withMessage('Email must be valid'),

  body('passwordHash')
    .exists()
    .withMessage('Password is required')
    .isString()
    .withMessage('Password must be a string')
    .isLength({ min: 8, max: 100 })
    .withMessage('Password must be at least 8 characters'),
];
