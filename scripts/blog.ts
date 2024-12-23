import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

async function getMarkdownFilesAndContent(directoryPath: string): Promise<{ fileName: string; matter: any }[]> {
    const files = await fs.promises.readdir(directoryPath);
    const fileInfos = [];

    for (const file of files) {
        const filePath = path.join(directoryPath, file);
        const stats = await fs.promises.stat(filePath);

        if (stats.isFile() && file.endsWith('.md')) {
            const md = matter.read(filePath, {delimiters: "~~~"}).matter;

            const result: { [key: string]: string } = {};
            const lines = md.split("\n")
            lines.forEach(line => {
                const [key, value] = line.split(" = ")
                if (key && value) {
                    result[key.trim()] = value.trim().slice(1, -1)
                }
            })
            fileInfos.push({ 
                fileName: path.parse(file).name, 
                matter:   result,
            });
        }
    }

    return fileInfos;
}

const directoryPath = "public/blog";
const outputFilePath = "./public/blog/list.json";

getMarkdownFilesAndContent(directoryPath).then(results => {
    const jsonData = JSON.stringify(results, null, 2);
    fs.writeFile(outputFilePath, jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Ошибка записи файла:', err);
        } else {
            console.log('Файл успешно создан:', outputFilePath);
        }
    });
}).catch(err => {
    console.error('Ошибка:', err);
});
