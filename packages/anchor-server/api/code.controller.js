import axios from "axios";



export default class codeController {

    static async sendCode(req, res, next) {
        const source_code = req.body.source_code;
        const language_id = req.body.language_id;


        
        const options = {
            method: 'POST',
            url: 'https://judge0-ce.p.rapidapi.com/submissions',
            params: {base64_encoded: 'true', fields: '*'},
            headers: {
              'content-type': 'application/json',
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': '35b30a040emshc7149f24bb0d3dcp17a90cjsnb1f2d1526608',
              'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
            },
            data: `{"language_id":${language_id},"source_code":"${source_code}"}`
          };
          
          axios.request(options).then(function (response) {
              //console.log(response.data);
              res.json(response.data)
          }).catch(function (error) {
              //console.error(error);
              res.status(500).json({error: error });
          });

    }

    static async getCode(req, res, next) {
        const token = req.query.token;


        const options = {
            method: 'GET',
            url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
            params: {base64_encoded: 'true', fields: '*'},  
            headers: {
              'X-RapidAPI-Key': '35b30a040emshc7149f24bb0d3dcp17a90cjsnb1f2d1526608',
              'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              res.json(response.data)
          }).catch(function (error) {
              console.error(error);
              res.status(500).json({error: error});
          });
    }

}