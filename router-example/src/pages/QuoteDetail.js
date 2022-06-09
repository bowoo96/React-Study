import { useParams, Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import Comments from "../components/comments/Comments";

const QuoteDefail = () => {
    const params = useParams();

    console.log(params.quoteId);
    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDefail;
