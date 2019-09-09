import React from 'react';
import { connect } from 'react-redux';
import { breakFastList } from './actionCreators';
import ComponentBodyOfMenu from './Menu';

class index extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.breakFastList()
    }

    render() {
       
        return (
            <div>
                <ComponentBodyOfMenu data = {this.props.menuList}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        menuList: state.MenuReducer.bf
    };
}

const mapDispatchToProps = {
    breakFastList
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
