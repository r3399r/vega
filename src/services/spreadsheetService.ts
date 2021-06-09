import { GoogleSpreadsheet } from 'google-spreadsheet';

export const init = async () => {
  // stock list of boss
  const doc = new GoogleSpreadsheet('1lmfDiiEIJkLE4WMlX1zsXbTRfB-MiUiQ_C2EHx_tVcg');

  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_AUTH_CLIENT as string,
    private_key: (process.env.REACT_APP_AUTH_KEY as string).replace(/\\n/g, '\n'),
  });
  await doc.loadInfo(); // loads document properties and worksheets
};
