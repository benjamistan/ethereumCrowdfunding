import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x824DeBFF9B79d05aF155B2Ab4F4a19a94Ad4ADD8'
);

export default instance;

