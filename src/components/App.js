/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: junsyun <junsyun@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/03/24 01:51:44 by junsyun           #+#    #+#             */
/*   Updated: 2022/03/24 03:44:21 by junsyun          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "../routes/Detail";
import Detail from "../routes/Detail";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql
// } from "@apollo/client";

function App() {
  return (<Router>
    <Route exact path = "/" component = {Home} />
    <Route path = "/:id" component = {Detail} />
  </Router>
  );
}

export default App;
