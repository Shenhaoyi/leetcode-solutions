// 下面两行代码转为ESM
import fs from 'fs';
import path from 'path';

// 递归函数，用于统计文件夹下的文件数量
function countFilesInFolder(folderPath, reg) {
  let fileCount = 0;

  // 读取所有文件/文件夹名
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile() && /^\d+\./.test(file)) {
      // 如果是文件，且有序号
      fileCount++;
    }
  });

  return fileCount;
}

// 定义要统计的文件夹路径
const folderPath = './solutions';
const reg = /^\d+\.\w+\.ts$/;

// 调用函数并输出结果
const totalFiles = countFilesInFolder(folderPath, reg);
console.log(`文件夹 ${folderPath} 下的文件数量：${totalFiles} 个`);
