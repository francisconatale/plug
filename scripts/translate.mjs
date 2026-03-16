import fs from 'fs/promises';
import path from 'path';
import translate from 'translate';

// Configure translate to use Google (free)
translate.engine = 'google';

const LOCALES_DIR = './config/locales';
const BASE_LOCALE = 'es';
const TARGET_LOCALES = ['en', 'pt'];

async function translateObject(obj, targetLang) {
    const translated = Array.isArray(obj) ? [] : {};

    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object' && value !== null) {
            translated[key] = await translateObject(value, targetLang);
        } else if (typeof value === 'string') {
            // Skip empty strings or strings that look like IDs/placeholders
            if (!value.trim()) {
                translated[key] = value;
                continue;
            }

            try {
                console.log(`Translating [${key}]: "${value}" to ${targetLang}...`);
                translated[key] = await translate(value, { from: BASE_LOCALE, to: targetLang });
            } catch (error) {
                console.error(`Error translating [${key}]:`, error.message);
                translated[key] = value; // Fallback to original
            }
        } else {
            translated[key] = value;
        }
    }

    return translated;
}

async function main() {
    try {
        const baseFilePath = path.join(LOCALES_DIR, `${BASE_LOCALE}.json`);
        const baseContent = JSON.parse(await fs.readFile(baseFilePath, 'utf-8'));

        for (const lang of TARGET_LOCALES) {
            console.log(`\n--- Generating ${lang}.json ---`);
            const translatedContent = await translateObject(baseContent, lang);
            const targetFilePath = path.join(LOCALES_DIR, `${lang}.json`);

            await fs.writeFile(targetFilePath, JSON.stringify(translatedContent, null, 4), 'utf-8');
            console.log(`Successfully saved ${targetFilePath}`);
        }

        console.log('\nAll translations completed successfully!');
    } catch (error) {
        console.error('Translation process failed:', error);
        process.exit(1);
    }
}

main();
