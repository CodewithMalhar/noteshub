import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { collection, query, orderBy, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase.config';
import { useUser } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: {
    toDate: () => Date;
  };
  status: 'read' | 'unread';
}

const ContactMessages: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading } = useUser();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [loading, user, navigate]);

  useEffect(() => {
    if (user?.role !== 'admin') return;
    
    const fetchMessages = async () => {
      setIsLoading(true);
      try {
        const messagesQuery = query(
          collection(db, 'contactSubmissions'),
          orderBy('timestamp', 'desc')
        );
        
        const querySnapshot = await getDocs(messagesQuery);
        const messagesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as ContactMessage[];
        
        setMessages(messagesList);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError('Failed to load messages. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMessages();
  }, [user]);

  const handleMarkAsRead = async (messageId: string) => {
    try {
      const messageRef = doc(db, 'contactSubmissions', messageId);
      await updateDoc(messageRef, {
        status: 'read'
      });
      
      // Update the local state
      setMessages(prev => 
        prev.map(message => 
          message.id === messageId 
            ? { ...message, status: 'read' as 'read' } 
            : message
        )
      );
    } catch (error) {
      console.error('Error updating message status:', error);
      setError('Failed to update message status. Please try again.');
    }
  };

  const handleMarkAsUnread = async (messageId: string) => {
    try {
      const messageRef = doc(db, 'contactSubmissions', messageId);
      await updateDoc(messageRef, {
        status: 'unread'
      });
      
      // Update the local state
      setMessages(prev => 
        prev.map(message => 
          message.id === messageId 
            ? { ...message, status: 'unread' as 'unread' } 
            : message
        )
      );
    } catch (error) {
      console.error('Error updating message status:', error);
      setError('Failed to update message status. Please try again.');
    }
  };

  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!user) navigate('/login');
  
  if (user?.role !== 'admin') {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 font-medium">Access not granted</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/admin')}
            className="flex items-center px-4 py-2 text-gray-700 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200 mr-4"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Dashboard
          </motion.button>
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          >
            Contact Messages
          </motion.h1>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {messages.length === 0 && !isLoading ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-8 border border-white/50 text-center"
          >
            <p className="text-gray-600 text-lg">No messages found. When users submit contact forms, they will appear here.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 border ${
                  message.status === 'unread' 
                    ? 'border-indigo-200 border-l-4 border-l-indigo-500' 
                    : 'border-gray-100'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{message.name}</h2>
                    <p className="text-indigo-600">{message.email}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">
                      {message.timestamp?.toDate 
                        ? new Date(message.timestamp.toDate()).toLocaleString() 
                        : 'No date available'}
                    </span>
                    {message.status === 'unread' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        Unread
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Read
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mt-2 mb-4">
                  <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
                </div>
                
                <div className="flex justify-end space-x-3">
                  {message.status === 'unread' ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleMarkAsRead(message.id)}
                      className="inline-flex items-center px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-700 text-sm hover:bg-indigo-100 transition-colors"
                    >
                      <FontAwesomeIcon icon={faCheck} className="mr-1.5" />
                      Mark as Read
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleMarkAsUnread(message.id)}
                      className="inline-flex items-center px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-sm hover:bg-gray-100 transition-colors"
                    >
                      <FontAwesomeIcon icon={faEyeSlash} className="mr-1.5" />
                      Mark as Unread
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ContactMessages;
