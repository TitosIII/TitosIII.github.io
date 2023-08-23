import AnimatedCursor from 'react-animated-cursor';

const Cursor = () => {
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
                backgroundColor: '#90DDF0',
                boxShadow: '0 0 20px #07383C',
            }}
            outerStyle={{
                width: '20px',
                height: '20px',
                boxShadow: '0 0 20px #90DDF0'
}}
/>
    );
}

export default Cursor;
