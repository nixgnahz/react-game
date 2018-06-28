import { connect } from 'react-redux'
import GiftBag from '../components/GiftBag/index'

const mapStateToProps = state => ({
  gifts: state.gifts
})

const mapDispatchToProps = dispatch => ({
  changeMoreGift: id => dispatch({
    type: 'changeMoreGift',
    id
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftBag)
