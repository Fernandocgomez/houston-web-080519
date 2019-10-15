class User < ApplicationRecord
    has_many :dragons

    has_secure_password

    def as_json(*)
        super.except('password_digest')
    end
end