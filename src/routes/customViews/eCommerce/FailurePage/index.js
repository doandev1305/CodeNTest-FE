import React, { useEffect } from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const App = () => {
    useEffect(() => {
        localStorage.removeItem("cart");
    }, []);
    return (
        <Result
            status="error"
            title="Purchased Failed!"
            extra={[
                <Link to="/eCommerce/product-grid">
                    <Button type="primary" key="console">
                        Buy Again
                    </Button>
                </Link>,
            ]}
        />
    );
};

export default App;