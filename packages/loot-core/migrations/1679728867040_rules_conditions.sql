BEGIN TRANSACTION;

ALTER TABLE rules ADD COLUMN conditions_op TEXT DEFAULT 'and';

COMMIT;
