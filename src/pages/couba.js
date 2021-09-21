import Skeleton from "react-loading-skeleton";

function couba() {
    return (
        <div style={{ fontSize: 20, lineHeight: 2 }}>
        <h1>{this.props.title || <Skeleton />}</h1>
        {this.props.body || <Skeleton count={10} />}
      </div>
    )
}

export default couba
