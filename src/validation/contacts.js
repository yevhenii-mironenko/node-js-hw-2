import Joi from 'joi';

export const createContactsSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  isFavorite: Joi.boolean().required(),
  contactType: Joi.string().valid('home', 'personal').required(),
});

export const updateContactsSchema = Joi.object({
  name: Joi.string().min(3).max(20).optional(),
  email: Joi.string().email().optional(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .optional(),
  isFavorite: Joi.boolean().optional(),
  contactType: Joi.string().valid('home', 'personal').optional(),
});
