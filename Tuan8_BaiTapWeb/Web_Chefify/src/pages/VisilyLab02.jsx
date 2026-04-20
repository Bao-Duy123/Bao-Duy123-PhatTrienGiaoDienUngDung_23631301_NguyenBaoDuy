import React from 'react';


const VisilyLab02 = ({ user, onLogout }) => {
  return (
    <section className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-[1240px] px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-pink-500">Chefify Dashboard</h1>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
                <div className="text-sm text-zinc-700">{user.name}</div>
                <button onClick={onLogout} className="rounded bg-pink-500 px-3 py-1 text-white">Logout</button>
              </>
            ) : (
              <div className="text-sm text-zinc-500">Not logged in</div>
            )}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow">
            <h3 className="text-lg font-bold text-zinc-800">Welcome</h3>
            <p className="mt-2 text-sm text-zinc-600">This is the Visily Lab 02-like dashboard shown after login.</p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow">
            <h3 className="text-lg font-bold text-zinc-800">Your Recipes</h3>
            <p className="mt-2 text-sm text-zinc-600">Saved recipes will appear here.</p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow">
            <h3 className="text-lg font-bold text-zinc-800">Settings</h3>
            <p className="mt-2 text-sm text-zinc-600">Manage your account and preferences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisilyLab02;
