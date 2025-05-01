< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Seneb is a blood bank website that connects donors with recipients in need of blood donations." />
            <title>Registration Form</title>
            <!-- Fonts -->
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
            <!-- Icons -->
            <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
            <!-- Tailwind CSS -->
            <script src="https://cdn.tailwindcss.com"></script>
            <!-- React and Babel -->
            <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.22.5/babel.min.js"></script>
            <style>
                body {
                    font - family: 'Poppins', sans-serif;
        }
                .password-wrapper {
                    position: relative;
        }
                .toggle-password {
                    position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
        }
            </style>
        </head>
        <body>
            <div id="root"></div>
            <script type="text/babel">
                const {useState, useEffect} = React;

                // Navbar Component
                function Navbar() {
            return (
                <nav className="bg-white shadow sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <a href="#" className="flex items-center">
                                    <img className="h-12 w-auto" src="https://via.placeholder.com/60?text=Seneb" alt="Seneb Logo" />
                                    <h2 className="text-2xl font-semibold ml-2">SENEB</h2>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <div className="hidden md:flex space-x-4">
                                    <a href="seneb.html" className="text-gray-700 hover:text-blue-600 px-3 py-2">Home</a>
                                    <a href="seneb.html" className="text-gray-700 hover:text-blue-600 px-3 py-2">Why Donate Blood</a>
                                    <a href="seneb.html" className="text-gray-700 hover:text-blue-600 px-3 py-2">Donate Process</a>
                                    <a href="seneb.html" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact Us</a>
                                </div>
                                <a href="login.html" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</a>
                            </div>
                        </div>
                    </div>
                </nav>
                );
        }

                // Registration Form Component
                function RegistrationForm() {
            const [role, setRole] = useState('donor');

            const handleRoleChange = (e) => {
                    setRole(e.target.value);
            };

            const togglePasswordVisibility = (id) => {
                const input = document.getElementById(id);
                if (input) {
                    const type = input.type === 'password' ? 'text' : 'password';
                input.type = type;
                const icon = input.nextElementSibling;
                icon.classList.toggle('ri-eye-line');
                icon.classList.toggle('ri-eye-off-line');
                }
            };

                return (
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <h2 className="text-3xl font-semibold text-center mb-4">Registration</h2>
                    <p className="text-center text-gray-600 mb-4">All fields (*) are mandatory</p>
                    <hr className="mb-6" />

                    {/* Role Selector */}
                    <div className="flex justify-center mb-6">
                        <label className="mr-4 font-medium">Register as:</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="role"
                                    value="donor"
                                    checked={role === 'donor'}
                                    onChange={handleRoleChange}
                                    className="mr-2"
                                />
                                Donor
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="role"
                                    value="hospital"
                                    checked={role === 'hospital'}
                                    onChange={handleRoleChange}
                                    className="mr-2"
                                />
                                Hospital
                            </label>
                        </div>
                    </div>
                    <hr className="mb-6" />

                    {/* Donor Fields */}
                    {role === 'donor' && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Personal Details:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                                    <input type="text" placeholder="Enter your name" required className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">National ID *</label>
                                    <input type="text" placeholder="Enter your ID" required className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Phone Number *</label>
                                    <input type="tel" placeholder="Enter your phone number" required className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input type="email" placeholder="Enter your email" className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Password *</label>
                                    <div className="password-wrapper">
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            required
                                            className="w-full border rounded px-3 py-2"
                                        />
                                        <i
                                            className="ri-eye-off-line toggle-password"
                                            onClick={() => togglePasswordVisibility('password')}
                                        ></i>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Confirm Password *</label>
                                    <div className="password-wrapper">
                                        <input
                                            type="password"
                                            id="confirm-password"
                                            placeholder="Enter your password again"
                                            required
                                            className="w-full border rounded px-3 py-2"
                                        />
                                        <i
                                            className="ri-eye-off-line toggle-password"
                                            onClick={() => togglePasswordVisibility('confirm-password')}
                                        ></i>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Date of Birth *</label>
                                    <input type="date" required className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Gender *</label>
                                    <select required className="w-full border rounded px-3 py-2">
                                        <option value="" disabled selected>Select your gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Address *</label>
                                    <input type="text" placeholder="Enter your address" required className="w-full border rounded px-3 py-2" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Donation Details:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Blood Type *</label>
                                    <select required className="w-full border rounded px-3 py-2">
                                        <option value="" disabled selected>Select your blood type</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Last Donation Date *</label>
                                    <input type="date" required className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Medical Conditions *</label>
                                    <select required className="w-full border rounded px-3 py-2">
                                        <option value="" disabled selected>Any medical conditions?</option>
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Medications Taken *</label>
                                    <select required className="w-full border rounded px-3 py-2">
                                        <option value="" disabled selected>Are you taking medications?</option>
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Weight (kg) *</label>
                                    <input
                                        type="number"
                                        min="30"
                                        placeholder="Enter your weight"
                                        required
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Hospital Fields */}
                    {role === 'hospital' && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Hospital Details:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Hospital Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter hospital name"
                                        required
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">License Number *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter license number"
                                        required
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email Address *</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email address"
                                        required
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Password *</label>
                                    <div className="password-wrapper">
                                        <input
                                            type="password"
                                            id="hospital-password"
                                            placeholder="Enter your password"
                                            required
                                            className="w-full border rounded px-3 py-2"
                                        />
                                        <i
                                            className="ri-eye-off-line toggle-password"
                                            onClick={() => togglePasswordVisibility('hospital-password')}
                                        ></i>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Confirm Password *</label>
                                    <div className="password-wrapper">
                                        <input
                                            type="password"
                                            id="confirm-hospital-password"
                                            placeholder="Enter your password again"
                                            required
                                            className="w-full border rounded px-3 py-2"
                                        />
                                        <i
                                            className="ri-eye-off-line toggle-password"
                                            onClick={() => togglePasswordVisibility('confirm-hospital-password')}
                                        ></i>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Phone Number *</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter phone number"
                                        required
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Location *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter hospital location"
                                        required
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Type of Facility *</label>
                                    <select required className="w-full border rounded px-3 py-2">
                                        <option value="" disabled selected>Select facility type</option>
                                        <option value="public">Public</option>
                                        <option value="private">Private</option>
                                        <option value="blood-bank">Blood Bank</option>
                                        <option value="clinic">Clinic</option>
                                        <option value="hospital">Hospital</option>
                                    </select>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Staff Contact Details:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Staff Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter staff name"
                                        required
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Staff Phone *</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter staff phone number"
                                        required
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Staff Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter staff email"
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="text-center">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                            Register
                        </button>
                    </div>
                </div>
                );
        }

                // Main App Component
                function App() {
            return (
                <div>
                    <Navbar />
                    <RegistrationForm />
                </div>
                );
        }

                // Render the App
                ReactDOM.render(<App />, document.getElementById('root'));
            </script>
        </body>
    </html>