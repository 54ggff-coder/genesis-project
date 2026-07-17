export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          bio: string | null;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["profiles"]["Row"]> & { id: string };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Row"]>;
      };
      assessments: {
        Row: {
          id: string;
          user_id: string;
          answers: Record<string, number>;
          score: number;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["assessments"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["assessments"]["Row"]>;
      };
    };
  };
}
