import React, { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import { loginSchema } from "../validation/login.schema";
import type { LoginFormInterface } from "../types/login.types";
import { useDebounce } from "../hooks/useDebounce";

export default function SignupForm() {
  const [values, setValues] = useState<LoginFormInterface>({
    email: "",
    password: "",
    valueSavePassword: false,
    valuePrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const debouncedEmail = useDebounce(values.email, 500);
  const debouncedPassword = useDebounce(values.password, 500);

  const setField = (field: keyof LoginFormInterface, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

useEffect(() => {
  if (!values.email) {
    Promise.resolve().then(() => {
      setErrors((prev) => ({ ...prev, email: "" }));
    });
    return;
  }

  const schema = loginSchema.pick({ email: true });
  const result = schema.safeParse({ email: debouncedEmail });

  const msg = result.success
    ? ""
    : result.error.issues[0]?.message ?? "Invalid email";

  Promise.resolve().then(() => {
    setErrors((prev) => ({ ...prev, email: msg }));
  });
}, [debouncedEmail]);

useEffect(() => {
  if (!values.password) {
    Promise.resolve().then(() => {
      setErrors((prev) => ({ ...prev, password: "" }));
    });
    return;
  }

  const schema = loginSchema.pick({ password: true });
  const result = schema.safeParse({ password: debouncedPassword });

  const msg = result.success
    ? ""
    : result.error.issues[0]?.message ?? "Invalid password";

  Promise.resolve().then(() => {
    setErrors((prev) => ({ ...prev, password: msg }));
  });
}, [debouncedPassword]);

  const validateAll = () => {
    const result = loginSchema.safeParse(values);

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const e of result.error.issues) {
        const key = String(e.path[0] ?? "form");
        next[key] = e.message;
      }
      setErrors(next);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;
    console.log("Submitted:", values);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          className={`w-full rounded-md border px-3 py-2 text-sm ${
            errors.email ? "border-red-400" : "border-gray-200"
          }`}
          placeholder="you@company.com"
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <div className="relative">
          <input
            type="password"
            value={values.password}
            onChange={(e) => setField("password", e.target.value)}
            className={`w-full rounded-md border px-3 py-2 text-sm ${
              errors.password ? "border-red-400" : "border-gray-200"
            }`}
            placeholder="Minimum 8 characters"
          />
          <Lock className="absolute right-3 top-1/2 h-4 w-4 text-gray-400 -translate-y-1/2" />
        </div>
        {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={values.valueSavePassword}
          onChange={(e) => setField("valueSavePassword", e.target.checked)}
        />
        Save the password
      </label>

      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          checked={values.valuePrivacy}
          onChange={(e) => setField("valuePrivacy", e.target.checked)}
          className="mt-1"
        />
        <span>
          I have read and accept the <span className="text-pink-500">Privacy Policy</span>
        </span>
      </label>
      {errors.valuePrivacy && <p className="text-xs text-red-500">{errors.valuePrivacy}</p>}
      <button
        type="submit"
        className="w-full rounded-md bg-pink-500 text-white py-2 text-sm font-medium hover:bg-pink-600"
      >
        Create an account
      </button>
    </form>
  );
}