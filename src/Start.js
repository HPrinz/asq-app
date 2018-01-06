// thanks to  https://github.com/spencercarli/react-navigation-auth-flow/tree/finished-code

import React from "react";
import { createRootNavigator } from "./RootNavigator";
import { isLoggedIn } from "./Auth";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            checkedLogin: false
        };
    }

    componentWillMount() {
        isLoggedIn()
            .then(res => this.setState({ loggedIn: res, checkedLogin: true }))
            .catch(err => alert("An error occurred"));
    }

    render() {
        const { checkedLogin, loggedIn } = this.state;

        // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
        if (!checkedLogin) {
            return null;
        }

        const Layout = createRootNavigator(loggedIn);
        return <Layout />;
    }
}

