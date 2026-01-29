import { Transform } from 'class-transformer';

export const TrimDecorator = () =>
  Transform(({ value }) => (typeof value === 'string' ? value.trim() : value));
