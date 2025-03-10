import React, { useState } from 'react';

const KanjiAPIComponent = () => {
    const [kanji, setKanji] = useState('あ'); // Ký tự đầu vào mặc định
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);

    // Hàm chuyển đổi ký tự thành mã Unicode
    const getUnicode = (char) => {
        return char.charCodeAt(0);
    };

    // Hàm gửi dữ liệu đến API
    const handleSubmit = async () => {
        setLoading(true); // Bắt đầu tải
        const unicodeValue = getUnicode(kanji); // Lấy mã Unicode của ký tự

        const payload = {
            lang: "ja", // Ngôn ngữ Nhật
            data: [unicodeValue] // Gửi mã Unicode trong mảng
        };

        try {
            const response = await fetch('http://localhost/animCJK/samples/_php/fetchData.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            setResponseData(data); // Nhận dữ liệu trả về từ API
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Kết thúc quá trình tải
        }
    };

    return (
        <div>
            <h1>Kanji Unicode API</h1>
            <input
                type="text"
                value={kanji}
                onChange={(e) => setKanji(e.target.value)} // Cập nhật ký tự nhập vào
                placeholder="Nhập ký tự Kanji"
            />
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? 'Đang tải...' : 'Gửi đến API'}
            </button>

            {responseData && (
                <div>
                    <h2>Phản hồi từ API:</h2>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default KanjiAPIComponent;
