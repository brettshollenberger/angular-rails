module Static
  module Api
    class CurriculaController < ApplicationController
      Curricula = Struct.new(:id, :name, :source_id)

      def index
        @curricula = database.map { |c| Curricula.new(*c) }
      end

      def show
        @curriculum = Curricula.new *database.first
      end

    private
      def database
        [
          [1, "Migrancy, Culture, and Identity Literature", nil],
          [2, "Javascript", nil],
          [3, "Javascript for Beginners", 2]
        ]
      end
    end
  end
end
