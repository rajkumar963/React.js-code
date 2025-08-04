import React from 'react'

function DynamicStyle() {
    const [style, setStyle] = React.useState({
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        margin: '20px',
        backgroundColor: 'green'
    });

    const [gridStyle, setGridStyle] = React.useState(true)

  return (
    <div>
        <h2>DynamicStyle</h2>
        <div style={style}>
            This is a dynamically styled div.
        </div>
        <button onClick={() => setStyle({ ...style, backgroundColor: 'gray', color: 'black' })}>Gray</button> &nbsp;
        <button onClick={() => setStyle({ ...style, backgroundColor: 'blue', color: 'white' })}>Blue</button> &nbsp;
        <button onClick={() => setStyle({ ...style, backgroundColor: 'green', color: 'black' })}>Green</button> &nbsp;
        <button onClick={() => setStyle({ ...style, backgroundColor: 'red', color: 'white' })}>Red</button> &nbsp;
        <button onClick={() => setStyle({ ...style, backgroundColor: 'purple', color: 'yellow' })}>Purple</button>

        <button onClick={() => setGridStyle(!gridStyle)}>Toggle Grid</button>
        <div style={{display:gridStyle?'flex':'block', flexWrap: 'wrap'}}>
            <div style={{ ...style, padding: '10px', border: '1px solid black',width: '250px', margin: '10px auto' }}>
                This div has inline styles applied. 
                You can change the styles as needed.
                <br />
                For example, change the background color or padding.

                <br />
                You can also add more styles like border, margin, etc.
            </div>
            <div style={{ ...style, padding: '10px', border: '1px solid black', width: '250px', margin: '10px auto' }}>
                This div has inline styles applied. 
                You can change the styles as needed.
                <br />
                For example, change the background color or padding.

                <br />
                You can also add more styles like border, margin, etc.
            </div>
            <div style={{ ...style, padding: '10px', border: '1px solid black', width: '250px', margin: '10px auto' }}>
                This div has inline styles applied. 
                You can change the styles as needed.
                <br />
                For example, change the background color or padding.

                <br />
                You can also add more styles like border, margin, etc.
            </div>
            <div style={{ ...style, padding: '10px', border: '1px solid black', width: '250px', margin: '10px auto' }}>
                This div has inline styles applied. 
                You can change the styles as needed.
                <br />
                For example, change the background color or padding.

                <br />
                You can also add more styles like border, margin, etc.
            </div>
            <div style={{ ...style, padding: '10px', border: '1px solid black', width: '250px', margin: '10px auto' }}>
                This div has inline styles applied. 
                You can change the styles as needed.
                <br />
                For example, change the background color or padding.

                <br />
                You can also add more styles like border, margin, etc.
            </div>
            <div style={{ ...style, padding: '10px', border: '1px solid black', width: '250px', margin: '10px auto' }}>
                This div has inline styles applied. 
                You can change the styles as needed.
                <br />
                For example, change the background color or padding.

                <br />
                You can also add more styles like border, margin, etc.
            </div>
            <div style={{ ...style, padding: '10px', border: '1px solid black', width: '250px', margin: '10px auto' }}>
                This div has inline styles applied. 
                You can change the styles as needed.
                <br />
                For example, change the background color or padding.

                <br />
                You can also add more styles like border, margin, etc.
            </div>
            <div style={{ ...style, padding: '10px', border: '1px solid black', width: '250px', margin: '10px auto' }}>
                This div has inline styles applied. 
                You can change the styles as needed.
                <br />
                For example, change the background color or padding.

                <br />
                You can also add more styles like border, margin, etc.
            </div>
            <div style={{ ...style, padding: '10px', border: '1px solid black', width: '250px', margin: '10px auto' }}>
                This div has inline styles applied. 
                You can change the styles as needed.
                <br />
                For example, change the background color or padding.

                <br />
                You can also add more styles like border, margin, etc.
            </div>
            <div style={{ ...style, padding: '10px', border: '1px solid black', width: '250px', margin: '10px auto' }}>
                This div has inline styles applied. 
                You can change the styles as needed.
                <br />
                For example, change the background color or padding.

                <br />
                You can also add more styles like border, margin, etc.
            </div>
        </div>
    </div>
  )
}

export default DynamicStyle;