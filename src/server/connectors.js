import Sequelize from 'sequelize';

const db = new Sequelize('smartcontent-admin', 'homestead', 'secret', {
  host: 'localhost',
  dialect: 'mysql',
  port: 33060,
  define: {
    timestamps: false,
  },
});

const OpenLayerCampaignModel = db.define('open_layer_campaign', {
  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING },
});

const CampaignModel = db.define('campaign', {
    id: { type: Sequelize.STRING, primaryKey: true },
    name: { type: Sequelize.STRING },
    createdAt: {type: Sequelize.DATE, field: 'created_at' },
  },
  {
    scopes: {
      manual: {
        include: {
          model: OpenLayerCampaignModel, as: 'openLayerCampaigns', where: {id: null}
        }
      },
    }
  }
);

const ClientModel = db.define('client', {
  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING },
});

CampaignModel.belongsTo(ClientModel, {foreignKey: 'client_id'})
CampaignModel.hasMany(OpenLayerCampaignModel, {foreignKey: 'campaign_id', sourceKey: 'id', as: 'openLayerCampaigns'});
ClientModel.hasOne(CampaignModel, {foreignKey: 'client_id'})
OpenLayerCampaignModel.hasOne(CampaignModel, {foreignKey: 'id', sourceKey: 'campaign_id'});

const Campaign = db.models.campaign;
const Client = db.models.client;
const OpenLayerCampaign = db.models.openLayerCampaigns;

export { Campaign, Client, OpenLayerCampaign };