
export default function Price({oldPrice, newPrice}) {
    let oldstyles = {
        textDecoration: "line-through",
           
    } 
    let newStyles = {
        fontWeight: "bold",
    }
    let styles={
        backgroundColor: "yellow",
        height: "35px",
        width: "250px",
        borderBottomLeftRadius: "24px",
        borderBottomRightRadius: "24px",
    }

        return (
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}