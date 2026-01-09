import React, { useState, useEffect } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/messages');
      const data = await response.json();
      
      if (data.success) {
        setMessages(data.data);
      } else {
        setError('Failed to fetch messages');
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="main-container">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-12 uppercase">
          Messages
        </h1>

        {loading && (
          <div className="text-center py-20">
            <p className="text-xl">Loading messages...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 text-xl">{error}</p>
            <button
              onClick={fetchMessages}
              className="mt-4 px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && messages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl opacity-60">No messages yet.</p>
          </div>
        )}

        {!loading && !error && messages.length > 0 && (
          <div className="space-y-6">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-purple-400">
                      {msg.name}
                    </h3>
                    {msg.email && (
                      <p className="text-sm text-gray-400 mt-1">{msg.email}</p>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {formatDate(msg.createdAt)}
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">{msg.message}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={fetchMessages}
            className="px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-colors font-heading uppercase"
          >
            Refresh Messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;

