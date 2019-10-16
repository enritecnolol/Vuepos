import moment from 'moment'
const inst = (a) => {
    if (a) { return moment(a) } else { return moment() }
};
export default inst;