import React, { useState, useEffect } from 'react';
import { Input, Table } from 'semantic-ui-react';

// Facture
export default function Invoices() {

    
    const [cols, setCols] = useState([
            { code: 'editionDate', label: "Date de l'émission de la facture" },
            { code: 'ref', label: "Numérotation de la facture" },
            { code: 'client', label: "Identité de l'acheteur" },
            { code: 'nature', label: "Désignation du produit ou de la prestation" },
            { code: 'ttc', label: "Somme totale à payer TTC" },
    ]);
    const [detailsCols, setDetailsCols] = useState([
            { code: 'quantity', label: "Quantité" },
            { code: 'unitPrice', label: "Prix unitaire HT" },
            { code: 'fulfillmentDate', label: "Date de la vente ou de la prestation de service" },
            { code: 'seller', label: "Identité du vendeur ou prestataire" },
            { code: 'order', label: "Numéro du bon de commande" },
            { code: 'tvaId', label: "Numéro individuel d'identification à la TVA" },
            { code: 'priceIncrease', label: "Majoration de prix" },
            { code: 'tvaRate', label: "Taux de TVA" },
            { code: 'tva', label: "Montant total de la TVA" },
            { code: 'priceDiscount', label: "Réduction de prix" },
            { code: 'ht', label: "Somme totale à payer HT" },
            { code: 'paymentDate', label: "Date à laquelle le règlement doit intervenir"},
            { code: 'paymentInAdvanceConditions', label: "Conditions d'escompte en cas de paiement anticipé"},
            { code: 'paymentInAdvanceDiscount', label: "Escompte pour paiement anticipé"},
            { code: 'latePaymentPenaltyRate', label: "Taux des pénalités de retard"},
            { code: 'debtCollectionCompensation', label: "Mention de l'indemnité forfaitaire pour frais de recouvrement"},
    ]);
    const [lines, setLines] = useState([
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
    ]);

    const color = 'blue';
    const thead = cols.map((col, colNumber) => (<Table.HeaderCell key={`header-cell-${colNumber}`}>{ col.label }</Table.HeaderCell>));
    const tbody = lines.map((line, lineNumber) => {
        const td = cols.map((col, colNumber) => (<Table.Cell key={`body-cell-${lineNumber}-${colNumber}`}>{ line[col.code] }</Table.Cell>));
        return (<Table.Row key={`body-row-${lineNumber}`}>{ td }</Table.Row>);
    });
    const tfoot = cols.map((col, colNumber) => (<Table.Cell key={`footer-cell-${colNumber}`}><div className="ui input"><input type="text" placeholder={ col.label } /></div></Table.Cell>));
    tbody.push((<Table.Row key={`footer`}>{ tfoot }</Table.Row>));
    return (
    <Table color={color} key={color}>
        <Table.Header><Table.Row>{ thead }</Table.Row></Table.Header>
        <Table.Body>
            { tbody }
        </Table.Body>
    </Table>
    );
}