import { Transform } from 'class-transformer';

export const TrimDecorator = () =>
  Transform(({ value }: { value: unknown }) =>
    typeof value === 'string' ? value.trim() : value,
  );
