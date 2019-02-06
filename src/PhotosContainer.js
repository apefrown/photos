import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Photo from "./Photo";

const PhotosContainer = ({ match }) => (
    <div>
        <Route path={`${match.url}/:id`} component={Photo} />
    </div>
)

export default withRouter(PhotosContainer);