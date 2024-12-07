import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import {
  Users, Calendar, Clock, DollarSign, Trash2, ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchTerm] = useState('');
  const [filterDate] = useState('');
  const [filterBarber] = useState('');

  // Load bookings from localStorage
  useEffect(() => {
    const storedBookings = localStorage.getItem('bookings');
    if (storedBookings) {
      const parsedBookings = JSON.parse(storedBookings);
      setBookings(parsedBookings);
      setFilteredBookings(parsedBookings);
      
    }
  }, []);

  // Calculate real statistics
  const stats = {
    totalBookings: bookings.length,
    totalRevenue: bookings.length * 30,
    todayBookings: bookings.filter(booking => 
      new Date(booking.date).toDateString() === new Date().toDateString()
    ).length,
    upcomingBookings: bookings.filter(booking => 
      new Date(booking.date) > new Date()
    ).length
  };

  // const [pieData, setPieData] = useState([]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Handle search and filters
  const filterBookings = (search, date, barber) => {
    let filtered = [...bookings];
    
    if (search) {
      filtered = filtered.filter(booking => 
        booking.name.toLowerCase().includes(search.toLowerCase()) ||
        booking.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (date) {
      filtered = filtered.filter(booking => booking.date === date);
    }
    
    if (barber) {
      filtered = filtered.filter(booking => booking.barber === barber);
    }
    
    setFilteredBookings(filtered);
  };

  // Delete booking
  const handleDeleteBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    setFilteredBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  // Chart data
  const chartData = [
    { name: 'Mon', bookings: 4 },
    { name: 'Tue', bookings: 6 },
    { name: 'Wed', bookings: 8 },
    { name: 'Thu', bookings: 5 },
    { name: 'Fri', bookings: 9 },
    { name: 'Sat', bookings: 12 },
    { name: 'Sun', bookings: 7 }
  ];

  const pieData = [
    { name: 'Traditional Haircut', value: 35 },
    { name: 'Royal Shave', value: 25 },
    { name: 'Beard Sculpting', value: 20 },
    { name: 'Other Services', value: 20 }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Website
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm text-gray-600">Total Bookings</h2>
                <p className="text-2xl font-bold text-gray-800">{stats.totalBookings}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm text-gray-600">Total Revenue</h2>
                <p className="text-2xl font-bold text-gray-800">${stats.totalRevenue}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm text-gray-600">Today's Bookings</h2>
                <p className="text-2xl font-bold text-gray-800">{stats.todayBookings}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-full">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm text-gray-600">Upcoming</h2>
                <p className="text-2xl font-bold text-gray-800">{stats.upcomingBookings}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Distribution Chart */}
         {/* Charts */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Bookings</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Service Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Recent Bookings</h2>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Search bookings..."
                  className="px-4 py-2 border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => filterBookings(e.target.value, filterDate, filterBarber)}
                />
                <input
                  type="date"
                  className="px-4 py-2 border rounded-lg"
                  value={filterDate}
                  onChange={(e) => filterBookings(searchTerm, e.target.value, filterBarber)}
                />
                <select
                  className="px-4 py-2 border rounded-lg"
                  value={filterBarber}
                  onChange={(e) => filterBookings(searchTerm, filterDate, e.target.value)}
                >
                  <option value="">All Barbers</option>
                  <option value="Master James">Master James</option>
                  <option value="Antonio">Antonio</option>
                  <option value="Theodore">Theodore</option>
                  <option value="William">William</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Barber</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBookings.map((booking, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{booking.service}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{booking.barber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {booking.date} at {booking.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{booking.phone}</div>
                        <div className="text-sm text-gray-500">{booking.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleDeleteBooking(index)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;