import React, { Component } from 'react';

// Connect is a higher order component (HoC) which
// connects the component to the redux store.
import { connect } from 'react-redux';

// React-helmet handles document head modifications
import { Helmet } from 'react-helmet';

// Actions
import {
    getPosts
} from '../../../globals/actions';

class Home extends Component {

    /**
     * Make the call for 'posts' when the API is mounted onto
     * the client
     */
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getPosts());
    }

    render() {
        return (
        	<div>
                <Helmet>
                    <title>Homepage</title>
                </Helmet>
        		<h1>Home</h1>
        		<p>Home page</p>
        	</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }

}

export default connect(
	mapStateToProps,
	null
)(Home);
