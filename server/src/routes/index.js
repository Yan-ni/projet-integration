const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

/**
 * @swagger
 * /api/etablissements:
 *   summary: Returns a list of schools
 *   description: Returns list of schools based on the filter provided in the query parameters
 *   get:
 *     parameters:
 *       - in: query
 *         name: search
 *         required: false
 *         schema:
 *           type: string
 *       - in: query
 *         name: type
 *         required: false
 *         schema:
 *           type: string
 *           enum: [université, école, autre établissement]
 *       - in: query
 *         name: secteur
 *         required: false
 *         schema:
 *           type: string
 *           enum: [public, privé]
 *       - in: query
 *         name: pays
 *         required: false
 *         schema:
 *           type: string
 *       - in: query
 *         name: region
 *         required: false
 *         schema:
 *           type: string
 *       - in: query
 *         name: departement
 *         required: false
 *         schema:
 *           type: string
 *       - in: query
 *         name: commune
 *         required: false
 *         schema:
 *           type: string
 *       - in: query
 *         name: dateCreation
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A JSON array of schools
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   etablissement_id_paysage:
 *                     type: string
 *                   coordonnees:
 *                     type: array
 *                     items:
 *                       type: number
 *                       format: float
 *                     minItems: 2
 *                     maxItems: 2
 *                   uo_lib:
 *                     type: string
 *                   uo_lib_officiel:
 *                     type: string
 *                   uo_lib_en:
 *                     type: string
 */
router.get('/etablissements', controllers.etablissements.get);

module.exports = router;
