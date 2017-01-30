import React, {Component} from 'react';
import Main from './Main';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

export default class BillSummary extends Component{
    componentWillMount(){
        AppActions.apiGetAll();
    }
    componentDidMount(){
        AppStore.addChangeListener(this.onChange);
    }
    componentWillUnmount(){
         AppStore.removeChangeListener(this.onChange);
    }
    onChange(){
        this.setState({
            appList: AppStore.getAll()
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            appList: AppStore.getAll()
        };
        this.onChange = this.onChange.bind(this);
        console.log(this.state.appList);
    }

    render(){
         return <div>
            <Main statement={this.state.appList.statement}
                  total={this.state.appList.total} key={this.state.appList.total}
                  package = {this.state.appList.package} 
                  callCharges = {this.state.appList.callCharges}
                  skyStore = {this.state.appList.skyStore}
            >
            </Main>
        </div>;
    }

}