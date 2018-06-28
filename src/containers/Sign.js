import { connect } from 'react-redux'
import Head from '../components/baseComponent/Head'

const mapStateToProps = state => ({
  sign: state.sign
})

const mapDispatchToProps = dispatch => ({
  changeSignStatus: () => dispatch({
    type: 'changeSignStatus'
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Head)
