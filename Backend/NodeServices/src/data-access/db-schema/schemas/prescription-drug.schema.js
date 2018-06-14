const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tableNames = require('../table-names.const');

const prescriptionDrugsSchema = new Schema({
    regId:[{
        type:Schema.Types.ObjectId,
        ref:tableNames.PatientRegistrationSchema,
        require:true

    }],
    presID: [{
        type: Schema.Types.ObjectId,
        ref: tableNames.Presciptions,
        reqiure: true
    }],
    drugID: [{
        type: Schema.Types.ObjectId,
        ref: tableNames.Drugs,
        require: true
    }],
    quantity: {
        type: Number,
        require: true
    }
});

module.exports = prescriptionDrugsSchema;