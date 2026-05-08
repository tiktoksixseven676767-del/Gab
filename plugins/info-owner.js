let handler = async (m, { conn, usedPrefix, command }) => {
    // Configurazione del contatto
    const nomeContatto = 'Unlimited';
    const numero = '212669995028'; // Il tuo nuovo numero
    const numeroFormattato = '+212 669-995028';

    // Costruzione della vCard
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:;${nomeContatto};;;
FN:${nomeContatto}
ORG:Unlimited
TITLE:
item1.TEL;waid=${numero}:${numeroFormattato}
item1.X-ABLabel:Unlimited
X-WA-BIZ-DESCRIPTION:ofc
X-WA-BIZ-NAME:${nomeContatto}
END:VCARD`;

    // Messaggio di citazione (finto) per estetica
    let quoted = {
        key: {
            participants: '0@s.whatsapp.net',
            fromMe: false,
            id: 'BixbyBot'
        },
        message: {
            extendedTextMessage: {
                text: '𝐎𝐰𝐧𝐞𝐫 𝐁𝐨𝐭',
                vcard: vcard
            }
        },
        participant: '0@s.whatsapp.net'
    };

    // Invia il contatto
    await conn.sendContact(m.chat, [[numero, nomeContatto]], quoted, { quoted: m });
};

// Configurazione del comando
handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['proprietario', 'creador', 'dueño', 'fgowner'];

export default handler;
