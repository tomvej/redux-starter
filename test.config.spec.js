import chai, {should} from 'chai';
import dirtyChai from 'dirty-chai';

process.env.NODE_ENV = 'test';

chai.use(dirtyChai);

should();
