// const csrf = require('csrf');
// const express = require('express');
// const cookieParser = require('cookie-parser');
// const csrfProtection = csrf({ cookie: true });
// const parseForm = express.urlencoded({ extended: false });
// const cds = require('@sap/cds');

// cds.on('bootstrap', app => {
//   app.use(cookieParser())
//   .head('https://b6fd1cf8trial-dev-capm-srv.cfapps.us10-001.hana.ondemand.com', csrfProtection, (req, res) => {
//     res.set({
//       'X-CSRF-Token': req.csrfToken(),
//       'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
//     }).send()
//   })

//   // Must: Provide actual <service endpoint>s of served services.
//   // Optional: Adapt for non-Fiori Elements UIs.
//   .post('https://b6fd1cf8trial-dev-capm-srv.cfapps.us10-001.hana.ondemand.com/$batch', parseForm, csrfProtection, (req, res, next) => next())

//   .use((err, req, res, next) => {
//     if (err.code !== 'EBADCSRFTOKEN') return next(err)
//     res.status(403).set('X-CSRF-Token', 'required').send()
//   })
// })