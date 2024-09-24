-- DropForeignKey
ALTER TABLE `Credentials` DROP FOREIGN KEY `Credentials_userId_fkey`;

-- DropForeignKey
ALTER TABLE `UserToken` DROP FOREIGN KEY `UserToken_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Credentials` ADD CONSTRAINT `Credentials_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserToken` ADD CONSTRAINT `UserToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
