import { connect } from "react-redux"
import { setVisibilityFilter } from "../actions"
import Link from "../components/Link"


const mapStateToProps = (state, ownProps) => ({
    active: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onFilterClicked: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)