import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { ShieldCheck, Eye, EyeOff, ArrowLeft, KeyRound, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export default function ChangePassword() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = (searchParams.get('role') as 'candidate' | 'company') || 'candidate';

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ oldPassword?: string; newPassword?: string; confirmPassword?: string }>({});

  const cardStyles = isWireframe
    ? 'bg-white border-2 border-gray-400 p-6 mb-6'
    : 'bg-white border border-gray-200 rounded-lg p-6 mb-6';

  const backPath = role === 'company' ? '/company/profile' : '/candidate/profile';

  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return null;
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    if (score <= 1) return { label: 'Weak', color: isWireframe ? 'bg-gray-400' : 'bg-red-500', width: 'w-1/4' };
    if (score === 2) return { label: 'Fair', color: isWireframe ? 'bg-gray-500' : 'bg-orange-400', width: 'w-2/4' };
    if (score === 3) return { label: 'Good', color: isWireframe ? 'bg-gray-600' : 'bg-yellow-400', width: 'w-3/4' };
    return { label: 'Strong', color: isWireframe ? 'bg-gray-800' : 'bg-green-500', width: 'w-full' };
  };

  const strength = getPasswordStrength(newPassword);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!oldPassword) newErrors.oldPassword = 'Current password is required.';
    if (!newPassword) newErrors.newPassword = 'New password is required.';
    else if (newPassword.length < 8) newErrors.newPassword = 'Password must be at least 8 characters.';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your new password.';
    else if (newPassword !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <Navbar userRole={role} isAuthenticated />
      <div className="flex">
        <DashboardSidebar userRole={role} />

        <main className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            {/* Back button */}
            <button
              onClick={() => navigate(backPath)}
              className={
                isWireframe
                  ? 'flex items-center gap-2 text-black mb-6 hover:underline'
                  : 'flex items-center gap-2 text-[#2563EB] mb-6 hover:underline'
              }
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Profile
            </button>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={
                    isWireframe
                      ? 'p-2 border-2 border-gray-400'
                      : 'p-2 rounded-lg bg-[#2563EB]/10'
                  }
                >
                  <ShieldCheck
                    className={isWireframe ? 'h-6 w-6 text-black' : 'h-6 w-6 text-[#2563EB]'}
                  />
                </div>
                <h1
                  className={
                    isWireframe
                      ? 'text-3xl font-bold text-black'
                      : 'text-3xl font-bold text-[#0F172A]'
                  }
                >
                  Change Password
                </h1>
              </div>
              <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                Update your password to keep your account secure.
              </p>
            </div>

            {submitted ? (
              /* Success State */
              <div className={cardStyles}>
                <div className="flex flex-col items-center py-8 text-center">
                  <div
                    className={
                      isWireframe
                        ? 'border-2 border-gray-400 rounded-full p-4 mb-4'
                        : 'bg-[#22C55E]/10 rounded-full p-4 mb-4'
                    }
                  >
                    <CheckCircle2
                      className={isWireframe ? 'h-12 w-12 text-black' : 'h-12 w-12 text-[#22C55E]'}
                    />
                  </div>
                  <h2
                    className={
                      isWireframe
                        ? 'text-xl font-bold text-black mb-2'
                        : 'text-xl font-semibold text-[#0F172A] mb-2'
                    }
                  >
                    Password Updated Successfully!
                  </h2>
                  <p className={isWireframe ? 'text-black mb-6' : 'text-gray-500 mb-6'}>
                    Your password has been changed. You can now use your new password to log in.
                  </p>
                  <Button
                    onClick={() => navigate(backPath)}
                    className={
                      isWireframe
                        ? 'border-2 border-gray-600'
                        : 'bg-[#2563EB] hover:bg-[#1d4ed8]'
                    }
                    variant={isWireframe ? 'outline' : 'default'}
                  >
                    Back to Profile
                  </Button>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit}>
                <div className={cardStyles}>
                  <div className="flex items-center gap-2 mb-6">
                    <KeyRound
                      className={isWireframe ? 'h-5 w-5 text-black' : 'h-5 w-5 text-[#2563EB]'}
                    />
                    <h2
                      className={
                        isWireframe
                          ? 'text-xl font-bold text-black'
                          : 'text-xl font-semibold text-[#0F172A]'
                      }
                    >
                      Update Password
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {/* Old Password */}
                    <div>
                      <Label
                        htmlFor="oldPassword"
                        className={isWireframe ? 'text-black' : ''}
                      >
                        Current Password
                      </Label>
                      <div className="relative mt-1">
                        <Input
                          id="oldPassword"
                          type={showOld ? 'text' : 'password'}
                          placeholder="Enter your current password"
                          value={oldPassword}
                          onChange={(e) => {
                            setOldPassword(e.target.value);
                            setErrors((prev) => ({ ...prev, oldPassword: undefined }));
                          }}
                          className={
                            isWireframe
                              ? 'border-2 border-gray-400 pr-10'
                              : `pr-10 ${errors.oldPassword ? 'border-red-400 focus-visible:ring-red-400' : ''}`
                          }
                        />
                        <button
                          type="button"
                          onClick={() => setShowOld((v) => !v)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          tabIndex={-1}
                        >
                          {showOld ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {errors.oldPassword && (
                        <p className="text-sm text-red-500 mt-1">{errors.oldPassword}</p>
                      )}
                    </div>

                    {/* New Password */}
                    <div>
                      <Label
                        htmlFor="newPassword"
                        className={isWireframe ? 'text-black' : ''}
                      >
                        New Password
                      </Label>
                      <div className="relative mt-1">
                        <Input
                          id="newPassword"
                          type={showNew ? 'text' : 'password'}
                          placeholder="Enter your new password"
                          value={newPassword}
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                            setErrors((prev) => ({ ...prev, newPassword: undefined }));
                          }}
                          className={
                            isWireframe
                              ? 'border-2 border-gray-400 pr-10'
                              : `pr-10 ${errors.newPassword ? 'border-red-400 focus-visible:ring-red-400' : ''}`
                          }
                        />
                        <button
                          type="button"
                          onClick={() => setShowNew((v) => !v)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          tabIndex={-1}
                        >
                          {showNew ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {errors.newPassword && (
                        <p className="text-sm text-red-500 mt-1">{errors.newPassword}</p>
                      )}

                      {/* Password Strength */}
                      {newPassword && strength && (
                        <div className="mt-2">
                          <div
                            className={
                              isWireframe
                                ? 'w-full h-1.5 border border-gray-300 bg-gray-100'
                                : 'w-full h-1.5 bg-gray-200 rounded-full overflow-hidden'
                            }
                          >
                            <div
                              className={`h-full transition-all duration-300 ${strength.color} ${strength.width} ${isWireframe ? '' : 'rounded-full'}`}
                            />
                          </div>
                          <p
                            className={`text-xs mt-1 ${isWireframe ? 'text-black' : 'text-gray-500'}`}
                          >
                            Strength:{' '}
                            <span
                              className={
                                isWireframe
                                  ? 'font-bold'
                                  : strength.label === 'Strong'
                                  ? 'text-green-600 font-medium'
                                  : strength.label === 'Good'
                                  ? 'text-yellow-600 font-medium'
                                  : strength.label === 'Fair'
                                  ? 'text-orange-500 font-medium'
                                  : 'text-red-500 font-medium'
                              }
                            >
                              {strength.label}
                            </span>
                          </p>
                          <ul
                            className={`text-xs mt-1 space-y-0.5 ${isWireframe ? 'text-black' : 'text-gray-400'}`}
                          >
                            <li className={newPassword.length >= 8 ? (isWireframe ? 'font-bold' : 'text-green-500') : ''}>
                              {newPassword.length >= 8 ? '✓' : '○'} At least 8 characters
                            </li>
                            <li className={/[A-Z]/.test(newPassword) ? (isWireframe ? 'font-bold' : 'text-green-500') : ''}>
                              {/[A-Z]/.test(newPassword) ? '✓' : '○'} One uppercase letter
                            </li>
                            <li className={/[0-9]/.test(newPassword) ? (isWireframe ? 'font-bold' : 'text-green-500') : ''}>
                              {/[0-9]/.test(newPassword) ? '✓' : '○'} One number
                            </li>
                            <li className={/[^A-Za-z0-9]/.test(newPassword) ? (isWireframe ? 'font-bold' : 'text-green-500') : ''}>
                              {/[^A-Za-z0-9]/.test(newPassword) ? '✓' : '○'} One special character
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <Label
                        htmlFor="confirmPassword"
                        className={isWireframe ? 'text-black' : ''}
                      >
                        Confirm New Password
                      </Label>
                      <div className="relative mt-1">
                        <Input
                          id="confirmPassword"
                          type={showConfirm ? 'text' : 'password'}
                          placeholder="Re-enter your new password"
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
                          }}
                          className={
                            isWireframe
                              ? 'border-2 border-gray-400 pr-10'
                              : `pr-10 ${errors.confirmPassword ? 'border-red-400 focus-visible:ring-red-400' : confirmPassword && confirmPassword === newPassword ? 'border-green-400' : ''}`
                          }
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirm((v) => !v)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          tabIndex={-1}
                        >
                          {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
                      )}
                      {!errors.confirmPassword && confirmPassword && confirmPassword === newPassword && (
                        <p className={`text-sm mt-1 ${isWireframe ? 'text-black font-bold' : 'text-green-500'}`}>
                          ✓ Passwords match
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(backPath)}
                    className={isWireframe ? 'border-2 border-gray-400' : ''}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className={
                      isWireframe
                        ? 'border-2 border-gray-600 px-8'
                        : 'bg-[#2563EB] hover:bg-[#1d4ed8] px-8'
                    }
                    variant={isWireframe ? 'outline' : 'default'}
                  >
                    Update Password
                  </Button>
                </div>
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
