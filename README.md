# Sweet Nails Studio · João Pessoa

Site com agendamento online da Sweet Nails Studio (Manaíra, João Pessoa - PB).

- Todos os dados da cliente ficam em `src/data/studioData.js` (serviços, valores, horários, WhatsApp, Calendly).
- Enquanto `calendlyUrl` estiver vazio, o agendamento pede dia e período e envia o pedido pelo WhatsApp.

```bash
npm install
npm run dev     # desenvolvimento
npm run build   # build de produção (Vercel usa este comando)
```
