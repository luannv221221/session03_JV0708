import React, { useState } from 'react';

const KanjiAPIComponent = () => {
    const [kanji, setKanji] = useState('あ');
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getUnicode = (char) => {
        return char.charCodeAt(0);
    };

    const handleSubmit = async () => {
        setLoading(true);
        const unicodeValue = getUnicode(kanji);

        const payload = {
            lang: "ja",
            data: [unicodeValue]
        };

        try {
            const response = await fetch('http://localhost:8080/animCJK/samples/_php/fetchData.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data && data.length > 0) {
                setResponseData(data[0]); // chỉ lấy phần tử đầu tiên trong mảng
            } else {
                setResponseData(null);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Kanji Unicode API</h1>
            <input
                type="text"
                value={kanji}
                onChange={(e) => setKanji(e.target.value)}
                placeholder="Nhập ký tự Kanji"
                maxLength={1}
            />
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? 'Đang tải...' : 'Gửi đến API'}
            </button>

            {/* Hiển thị phản hồi */}
            {responseData && (
                <div style={{ marginTop: 20 }}>
                    <h2>Ký tự: {responseData.character}</h2>

                    {/* SVG trả về từ API */}
                    {responseData.svg ? (
                        <div
                            dangerouslySetInnerHTML={{ __html: responseData.svg }}
                            style={{ width: '300px' }}
                        />
                    ) : (
                        <p>Không có dữ liệu SVG.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default KanjiAPIComponent;
