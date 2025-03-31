import React, { useEffect, useState } from 'react';
import { getFinancialAdvice } from '~/api';

const Advice: React.FC = () => {
    const [Advice, setAdvice] = useState<string>('');

    useEffect(() => {
        getFinancialAdvice().then((response) => {
            if(response) setAdvice(response.advice);
        });
    }, []);

    return (
        <div>
            <h1>Financial Advice</h1>
            <p>{Advice}</p>
        </div>
    );
};
export default Advice;