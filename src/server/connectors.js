import Sequelize from 'sequelize';

const db = new Sequelize('smartcontent-admin', 'homestead', 'secret', {
  host: 'localhost',
  dialect: 'mysql',
  port: 33060,
  define: {
    timestamps: false,
  },
});

const CampaignModel = db.define('campaign', {
  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING },
});

const ClientModel = db.define('client', {
  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING },
});

CampaignModel.hasOne(ClientModel);
ClientModel.belongsTo(CampaignModel);

const Campaign = db.models.campaign;
const Client = db.models.client;

export { Campaign, Client };