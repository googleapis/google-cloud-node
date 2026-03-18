import {AuthPlus} from 'googleapis-common';

const authPlus = new AuthPlus();
const auth = new authPlus.OAuth2('client', 'secret', 'redirect');
function doStuff() {
  const oauth2Url = auth.generateAuthUrl();
  console.log(oauth2Url);
}
doStuff();
